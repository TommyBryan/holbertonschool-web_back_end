#!/usr/bin/venv python3
""" Module to insert a new school into a MongoDB collection. """


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new school document into the MongoDB collection.

    Args:
        mongo_collection: The pymongo collection object.
        **kwargs: The fields and values to include in the new school document.

    Returns:
        The ID of the inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
