from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies by a given multiplier"""
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply

