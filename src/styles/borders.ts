const WIDTH = '2px';

export const borders = {
  WIDTH: WIDTH,
  WITH_COLOR(color: string) {
    return `${borders.WIDTH} solid ${color}`;
  },
  RADIUS: WIDTH,
};
