#!/usr/bin/env python3
"""
This module provides a function that returns a multiplier function.
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a given number by a multiplier.
    
    Args:
        multiplier (float): The number to multiply by
    
    Returns:
        Callable[[float], float]: A function that takes a float and returns its product with multiplier
    """
    def multiply(n: float) -> float:
        """
        Multiply a number by the predefined multiplier.
        
        Args:
            n (float): The number to multiply
        
        Returns:
            float: The product of n and the multiplier
        """
        return n * multiplier
    return multiply

