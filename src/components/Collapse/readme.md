Раскрывающиеся блоки.

Basic example

```js
<Collapse>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>

<Collapse>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>

<Collapse>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>
```

Example with named slots

```js
<Collapse ref="colapse">
    <template v-slot:title>
        <img src="https://placekitten.com/200/140" @click="$refs.colapse.toggle()">
    </template>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
  vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
  mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
</Collapse>
```

Example with chils components

```js
<Collapse>
  <section class="scene">
    <div class="grid">
      <div class="grid__list  grid__list--amara">
        <div class="grid__item">
          <Feature title="Feature One" sub-title="Hello, world!" />
        </div>
        <div class="grid__item">
          <Feature title="Feature Two" sub-title="Hello, world!" />
        </div>
        <div class="grid__item">
          <Feature title="Feature Three" sub-title="Hello, world!" />
        </div>
        <div class="grid__item">
          <Feature title="Feature Four" sub-title="Hello, world!" />
        </div>
      </div>
    </div>
  </section>
</Collapse>
```

## Модификаторы

### `collapse`

- `collapse--show` – раскрывает компонент
