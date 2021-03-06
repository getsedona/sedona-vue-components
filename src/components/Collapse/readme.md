Collapsed block

## Examples
<hr>

### Basic example

```js
<Collapse title="Collapse One">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>

<Collapse title="Collapse Two">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>

<Collapse title="Collapse Three">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>
```

### Example with named slots

```js
<Collapse ref="collapse">
    <template v-slot:title>
        <img src="https://placekitten.com/200/140" @click="$refs.collapse.toggle()">
    </template>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>
```

### Example with child components

```jsx
<Collapse title="Collapse Title">
  <scene>
    <grid view="amara">
        <grid-item>
          <Feature title="Feature One" sub-title="Hello, world!" />
        </grid-item>
        <grid-item>
          <Feature title="Feature Two" sub-title="Hello, world!" />
        </grid-item>
        <grid-item>
          <Feature title="Feature Three" sub-title="Hello, world!" />
        </grid-item>
        <grid-item>
          <Feature title="Feature Four" sub-title="Hello, world!" />
        </grid-item>
      </grid>
  </scene>
</Collapse>
```

### Example with v-model

```vue
<template>
  <div>
    <strong>
      {{ isOpen ? 'Collapse is open' : 'Collapse is closed' }}
    </strong>
    <br>
    <input v-model="isOpen" type="checkbox"> state
    <hr>
    <br>
    <Collapse v-model="isOpen" title="Collapse Title">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </Collapse>
  </div>
</template>

<script>
  export default {
    name: 'PageComponents',
    data() {
      return {
        isOpen: true,
      }
    },
  }
</script>
```

## CSS modifiers

### `collapse`

- `collapse--show` – open component
