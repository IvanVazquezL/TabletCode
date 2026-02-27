def find_employees(employee: pd.DataFrame) -> pd.DataFrame:
    result = (
        employee.merge(
            employee,
            left_on = "managerId",
            right_on = "id",
            suffixes = ("_employee", "_manager")
        )
    )

    result = result[result["salary_employee"] > result["salary_manager"]][["name_employee"]]
    result.columns = ["Employee"]

    return result