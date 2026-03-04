class BonusPolicy:
    PerformancePolicy(sales: float) -> float:
        if sales > 180000:
            return sales + sales * 0.02
        return sales

    RegionalPolicy(sales: float, region: str) -> float:
        if region != "Norte":
            return sales;
        return sales + sales * 0.01

    PenaltyPolicy(sales: float) -> float:
        if sales < 60000:
            return sales - sales * 0.01
        return sales