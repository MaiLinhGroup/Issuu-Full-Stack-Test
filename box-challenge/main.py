import sys
import os
import fileinput

from collections import namedtuple
from functools import reduce
from typing import Optional

# box with integer dimensions length x width x height
Box = namedtuple('Box', ['length', 'width', 'height'])
# set of cubes whose sides are powers of 2, e.g. 1x1x1, 2x2x2, 4x4x4 etc.
# and where the position in the list designates the dimension of the cube,
# e.g. 1x1x1 is at index 0, 2x2x2 at index 1, 4x4x4 at index 2 etc.
Cubes = list[int]

def calc(volume_of_box, volume_of_cubes, cubes, n) -> int:
    # print(f"box_volume: {volume_of_box}, cubes: {cubes}, cube_volumes: {volume_of_cubes}, n: {n}")
    if volume_of_box == 0:
        return 0
    if n == 0 and volume_of_box > 0:
        return -volume_of_box
    if volume_of_cubes[n-1] > volume_of_box:
        return calc(volume_of_box, volume_of_cubes, cubes, n-1)
    num_cubes = int(volume_of_box/volume_of_cubes[n-1])
    result = cubes[n-1] if (cubes[n-1] - num_cubes) < 0 else num_cubes
    new_vol_of_box = volume_of_box - (result * volume_of_cubes[n-1])
    result_1 = calc(new_vol_of_box, volume_of_cubes, cubes, n-1)
    result_0 = calc(volume_of_box, volume_of_cubes, cubes, n-1)
    # print(f"n: {n}, max({result} + {result_1}, {result_0})")
    return max(result + result_1, result_0)

def smallest_number_to_fill(cubes: Cubes, box: Box) -> int:
    if not cubes:
        return -1
    volume_of_box = volume_of(box)
    volume_of_cubes = []
    for i in range(len(cubes)):
        d = 2**i
        cube = Box(d,d,d)
        volume_of_cubes.append(volume_of(cube))
    sum_volume_cubes = [x * y for (x, y) in zip(cubes, volume_of_cubes)]
    total_volume_cubes = reduce(lambda a, b: a + b, sum_volume_cubes)
    return -1 if total_volume_cubes < volume_of_box else calc(volume_of_box, volume_of_cubes, cubes, len(cubes))

def volume_of(cuboid: Box) -> int:
    return cuboid.length * cuboid.width * cuboid.height

def transform_to_inputs(specification: str) -> Optional[tuple[Box,Cubes]]:
    try:
        l, w, h, *cubes = [int(s) for s in specification.split(' ')]
    except ValueError as e:
        print(f"ValueError for input {specification}: {e}")
        return None
    else:
        return Box(l, w, h), cubes

def main():
    try:
        for line in fileinput.input():
            print(f"Input: {line}")
            box, cubes = transform_to_inputs(line)
            # do something with box and cubes
            print(f"Output: {smallest_number_to_fill(cubes, box)}")
            print("==============")
    except FileNotFoundError:
        print("File not found")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)