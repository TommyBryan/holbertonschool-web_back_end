#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a page of the dataset starting from index,
        resilient to deletions.
        """
        # Make sure index is valid
        assert index is not None
        assert isinstance(index, int)
        assert index >= 0

        indexed_data = self.indexed_dataset()
        # Make sure index is not too big
        assert index < len(self.dataset())

        data = []
        current_index = index
        items_collected = 0

        # Collect page_size items, skipping missing indices
        while items_collected < page_size:
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
                items_collected += 1
            current_index += 1
            # Stop if we reach the end
            if current_index > max(indexed_data.keys()):
                break

        # Prepare the result dictionary
        result = {
            "index": index,
            "data": data,
            "page_size": page_size,
            "next_index": current_index
        }
        return result
