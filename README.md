# use-click-outside-ref

React hook to create a ref and listening click outside event of the ref.

## Usage
#### `useClickOutsideRef()`
```tsx
import React, { useState, useRef } from 'react'
import { useClickOutsideRef } from 'use-click-outside-ref'

export default () => {
  const [collapsed, setCollpased] = useState(false);
  const dropdownRef = useClickOutsideRef(() => setCollpased(false));

  return (
    <div ref={dropdownRef}>
      <span onClick={() => setCollpased(!collapsed)}>Toggle</span>
      {collapsed && <div className="dropdown" />}
    </div>
  );
};
```

#### `useClickOutside()`
```tsx
import React, { useState, useRef } from 'react'
import { useClickOutside } from 'use-click-outside-ref'

export default () => {
  const [collapsed, setCollpased] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setCollpased(false));

  return (
    <div ref={dropdownRef}>
      <span onClick={() => setCollpased(!collapsed)}>Toggle</span>
      {collapsed && <div className="dropdown" />}
    </div>
  );
};
```
## API

### `useClickOutsideRef()`
return a ref and listen to the click outside event.
- `callback: function`

### `useClickOutside()`
listening click outside event of an element.
- `ref: element`
- `callback: function`

