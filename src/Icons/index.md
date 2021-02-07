---
nav:
  title: Components
  path: /components
---

## 图标列表

```tsx
import React from 'react';
import { Card } from 'choerodon-ui';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icons from '@common/components/Icons';
import icons from '@common/assets/icons/iconfont.json';

export default () => (
  <Card>
    {icons?.glyphs?.map(({ font_class }) => (
      <Card.Grid
        hoverable
        style={{
          width: '25%',
          textAlign: 'center',
          display: 'inline-block',
          marginBottom: 15
        }}
        key={font_class}
      >
        <CopyToClipboard text={`<Icons type="${font_class}" />`}>
          <div><Icons type={font_class} /></div>
        </CopyToClipboard>
        <div>{font_class}</div>
      </Card.Grid>
    ))}
  </Card>
)
```

## 如何使用

使用 `<Icons />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

由于图标字体本质上还是文字，可以使用 `style` 和 `className` 设置图标的大小和颜色。

```tsx
import React from 'react';
import Icons from '@common/components/Icons';
export default () => <Icons type="add" style={{ fontSize: 16, color: '#08c' }} />
```

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 图标类型 | string | -
size | 图标大小 | number | -
color | 图标颜色 | string | -

