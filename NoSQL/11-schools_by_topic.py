def schools_by_topic(mongo_collection, topic):
    """
    Return the list of schools having a specific topic.

    Args:
        mongo_collection (Collection): pymongo collection object.
        topic (str): topic searched.

    Returns:
        list: list of schools
    """
    return list(mongo_collection.find({"topics": topic}))
