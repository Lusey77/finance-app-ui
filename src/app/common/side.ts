type Side = 'left' | 'right';

const Side = {
  get Left(): Side {
    return 'left';
  },
  get Right(): Side {
    return 'right';
  }
};

export { Side }
