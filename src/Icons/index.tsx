/**
 * index - 自定义图标
 * @Author: 徐昭 <zhao.xu@hand-china.com>
 * @Date: 2020/12/2 16:03
 * @LastEditTime: 2020/12/2 16:03
 * @Copyright: Copyright (c) 2020, Hand
 */
import React from 'react';
import classNames from 'classnames';
import { IconProps as C7NIconProps } from 'choerodon-ui/lib/icon';

import '@src/assets/icons/iconfont.css';

interface IconsProps extends C7NIconProps {
  size?: number;
  color?: string;
}

const Icons: React.FC<IconsProps> = ({
  type,
  style,
  size,
  color,
  customFontName,
  className,
  ...props
}) => {
  const classString = classNames(customFontName, `${customFontName}-${type}`, className);
  return <i style={{ fontSize: size, color, ...style }} className={classString} {...props} />;
};

Icons.defaultProps = {
  customFontName: 'hfins-ec-icon',
};

export default Icons;
