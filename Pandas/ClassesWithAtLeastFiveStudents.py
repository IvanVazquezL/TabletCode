def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    counts = courses["class"].value_counts()
    return counts[counts >= 5].index.to_frame(name = "class")