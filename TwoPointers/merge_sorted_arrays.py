def merge_sorted_arrays(a1: list[int], a2: list[int]) -> list[int]:
    i1, i2, result = 0, 0, []
    n1, n2 = len(a1), len(a2)

    while i1 < n1 and i2 < n2:
        if a1[i1] <= a2[i2]:
            result.append(a1[i1])
            i1 += 1
        else:
            result.append(a2[i2])
            i2 += 1

    result.extend(a1[i1:])
    result.extend(a2[i2:])

    return result
    
print(merge_sorted_arrays([1, 4, 7, 20], [3, 5, 6]))