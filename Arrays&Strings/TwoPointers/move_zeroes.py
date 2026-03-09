def move_zeroes(nums: list[int]) -> list[int]:
    insert_pos = 0

    for i in range(len(nums)):
        if nums[i] != 0:
            nums[insert_pos], nums[i] = nums[i], nums[insert_pos]
            insert_pos += 1
    
    return nums

print(move_zeroes([0,1,0,3,12]))
print(move_zeroes([0]))