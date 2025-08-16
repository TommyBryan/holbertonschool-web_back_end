def update_topics(mongo_collection, name, topics):
    """
    Change all topics of a school document based on the name.

    Args:
        mongo_collection (Collection): pymongo collection object.
        name (str): school name to update.
        topics (list): list of topics approached in the school.

    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
