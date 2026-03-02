def find_employees(employees: pd.DataFrame) -> pd.DataFrame:
    result = employees[
        (employees["salary"] < 30000) &
        (employees["manager_id"].notna()) &
        (~employees["manager_id"].isin(employees["employee_id"]))
    ][["employee_id"]]

    return result.sort_values("employee_id")