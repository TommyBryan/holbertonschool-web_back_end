#!/usr/bin/env python3
"""
Helper function for pagination task 0
"""

def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate start and end index for pagination.

    Args:
        page (int): Current page number (1-indexed).
        page_size (int): Number of items per page.

    Returns:
        tuple: (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
