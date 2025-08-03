#!/usr/bin/env python3
"""
This module provides a function to create a tuple from a string and its squared value.
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with a string and the square of a number.
    
    Args:
        k (str): The string key
        v (Union[int, float]): The numeric value to square
    
    Returns:
        Tuple[str, float]: A tuple containing the string and the squared value as float
    """
    return (k, float(v ** 2))

