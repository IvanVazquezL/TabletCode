def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    counts = orders["customer_number"].value_counts()
    max_count = counts.max()

    return counts[counts == max_count].index.to_frame(name = "customer_number")