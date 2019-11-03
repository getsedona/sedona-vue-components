Содержит в себе акцентный элемент и пояснительный текст. Подойдет для оформления преимуществ, списка сотрудников или услуг и т. п.

## Examples
<hr>

### Basic example

```js
<Feature title="Feature Title" sub-title="Hello, world!" />
```

### Example with named slots

```js
<Feature title="Hello">

  <template v-slot:avatar>
    <img src="https://placekitten.com/200/140">
  </template>

  <template v-slot:title>
    <h1 style="color:red">Hello, world!</h1>
  </template>

</Feature>
```

### Example with grid

```js
<section class="scene" style="max-width: 800px">
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
```
