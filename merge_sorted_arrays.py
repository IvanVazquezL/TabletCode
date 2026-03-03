def merge_sorted_arrays(a_1: list[int], a_2: list[int]) -> list[int]:
    i_1, i_2, new_a = 0, 0, []

    while i_1 < len(a_1) and i_2 < len(a_2):
        if a_1[i_1] < a_2[i_2]:
            new_a.append(a_1[i_1])
            i_1 += 1
        else:
            new_a.append(a_2[i_2])
            i_2 += 1

    while i_1 < len(a_1):
        new_a.append(a_1[i_1])
        i_1 += 1

    while i_2 < len(a_2):
        new_a.append(a_2[i_2])
        i_2 += 1

    return new_a
    
print(merge_sorted_arrays([1, 4, 7, 20], [3, 5, 6]))