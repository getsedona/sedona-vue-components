<template>
  <div
    :class="cardModifier"
    class="product-card"
  >
    <div
      v-if="daily"
      class="product-card__daily"
    >
      Товар дня
    </div>

    <div
      v-if="sale"
      class="product-card__sale"
    >
      {{ sale }}%
      <span>скидка</span>
    </div>

    <div class="product-card__wrap">
      <div class="product-card__accent">
        <ul
          v-if="type === 'diamond' && options"
          class="product-card__options"
        >
          <li
            v-for="(item, index) in options"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>

        <div
          v-if="type === 'jewellery' && brand"
          class="product-card__brand"
        >
          <svg>
            <use :xlink:href="`/img/brands.svg#${brand}`" />
          </svg>
        </div>

        <div class="product-card__media">
          <img
            :src="img"
            :alt="title"
          >
        </div>
      </div>

      <div class="product-card__content">
        <div class="product-card__heading">
          <div class="product-card__category">
            {{ category }}
          </div>

          <div class="product-card__title">
            <nuxt-link :to="link">
              <h3>{{ title }}</h3>
            </nuxt-link>
          </div>
        </div>

        <div class="product-card__cost">
          <div class="product-card__price">
            {{ currentPrice }} <span class="product-card__currency">₽</span>
          </div>

          <div
            v-if="oldPrice"
            class="product-card__old"
          >
            {{ oldPrice }} <span class="product-card__currency">₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      type: {
        type: String,
        required: true,
        validator: (value) => ['jewellery', 'diamond'].includes(value),
      },
      tone: {
        type: String,
        default: '',
        validator: (value) => ['', 'dark', 'light'].includes(value),
      },
      fill: {
        type: Boolean,
        default: false,
      },
      daily: {
        type: Boolean,
        default: false,
      },
      sale: {
        type: Number,
        default: 0,
      },
      options: {
        type: Array,
        default: () => [],
      },
      brand: {
        type: String,
        default: '',
        validator: (value) => ['', 'bulgari', 'chopard', 'degrisogono', 'pasquale', 'tiffany', 'vancleef'].includes(value),
      },
      category: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      currentPrice: {
        type: String,
        required: true,
      },
      oldPrice: {
        type: String,
        default: '',
      },
    },
    computed: {
      cardModifier() {
        return {
          'product-card--jewellery': this.type === 'jewellery',
          'product-card--diamond': this.type === 'diamond',
          'product-card--dark': this.tone === 'dark',
          'product-card--light': this.tone === 'light',
          'product-card--fill': this.fill,
        }
      },
    },
  }
</script>

<style lang="less">

	.product-card {
		position: relative;
		z-index: 1;
		min-height: 100%;
		display: flex;
		flex-direction: column;

		&--fill {
			border-radius: var(--common-borderRadius-primary);
			#common.box-base();
		}

		&--fill&--dark {
			#common.box-dark();
			background-image: url("/img/pattern.svg");
		}

		&--fill&--light {
			#common.box-light();
		}
	}

	.product-card__wrap {
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.product-card__daily {
		#common.text-small();
		position: absolute;
		top: 0;
		left: ~"calc(var(--common-indent-base) * -2)";
		padding: var(--common-indent-base);
		transform: rotate(180deg);
		writing-mode: vertical-rl;

		.product-card--fill & {
			@media (min-width: @common-breakpoint-md) {
				padding: var(--common-indent-double);
				left: ~"calc(var(--common-indent-double) * -2)";
			}
		}
	}

	.product-card__sale {
		#base.h2();
		line-height: 1em;
		position: absolute;
		top: -0.75em;
		right: var(--common-indent-base);
		background-color: var(--common-accentColor-primary);
		color: var(--common-darkColor-primary);
		text-align: center;
		border-radius: 50%;
		width: 2.75em;
		height: $width;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--common-indent-base);

		span {
			#common.text-small();
			font-family: var(--common-fontFamily-primary);
			display: block;
			margin-bottom: -0.5em;
		}

		.product-card--fill & {
			@media (min-width: @common-breakpoint-md) {
				right: var(--common-indent-double);
			}
		}
	}

	.product-card__accent {
		--common-animationDuration-primary: 1s;
		--common-animationTimingFunction-primary: cubic-bezier(0.21, 0.61, 0.35, 1);

		#common.box-base();
		border-radius: var(--common-borderRadius-primary);
		height: 200px;
		position: relative;
		z-index: -1;
		display: flex;
		justify-content: center;

		@media (min-width: @common-breakpoint-sm) {
			height: 400px;
		}

		.product-card--dark & {
			#common.box-dark();
			background-image: url("/img/pattern.svg");
		}

		.product-card--light & {
			#common.box-light();
		}

		.product-card--fill & {
			background-color: transparent;
			background-image: none;
			flex-grow: 1;
		}
	}

	.product-card__options {
		#common.text-small();
		position: absolute;
		left: 0;
		top: 0;
		padding: var(--common-indent-base);
		color: var(--common-baseColor-secondary);

		@media (max-width: @common-breakpoint-sm - 1px) {
			display: none;
		}

		.product-card--fill & {
			@media (min-width: @common-breakpoint-md) {
				padding: var(--common-indent-double);
			}
		}

		li:first-child {
			font-weight: bold;
		}
	}

	.product-card__brand {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		padding: var(--common-indent-base);
		color: var(--common-baseColor-divider);
		transition-duration: var(--common-animationDuration-primary);
		transition-timing-function: var(--common-animationTimingFunction-primary);
		transition-property: transform;

		body:not(.mobile) .product-card__wrap:hover & {
			transform: scale(0.8);
		}

		svg {
			width: 100%;
		}
	}

	.product-card__media {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--common-indent-base);
		transition-duration: var(--common-animationDuration-primary);
		transition-timing-function: var(--common-animationTimingFunction-primary);
		transition-property: transform;

		@media (min-width: @common-breakpoint-md) {
			padding: var(--common-indent-double);
		}

		.product-card--diamond & {
			align-items: flex-end;
		}

		body:not(.mobile) .product-card__wrap:hover & {
			transform: scale(1.2);
		}

		body:not(.mobile) .product-card--diamond .product-card__wrap:hover & {
			transform: scale(1.2) translate3d(0, -4%, 0);
		}

		img {
			max-width: none;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.product-card__content {
		--base-link-color-base: var(--common-baseColor-primary);
		--base-link-color-hover: var(--common-baseColor-primary);

		margin-top: var(--common-indent-half);

		@media (min-width: @common-breakpoint-sm) {
			margin-top: var(--common-indent-base);
		}

		.product-card--fill & {
			margin-top: 0;
			padding: 0 var(--common-indent-base) var(--common-indent-base);

			@media (min-width: @common-breakpoint-sm) {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
			}

			@media (min-width: @common-breakpoint-md) {
				padding: 0 var(--common-indent-double) var(--common-indent-double);
			}
		}
	}

	.product-card__heading {
		.product-card--fill & {
			@media (min-width: @common-breakpoint-sm) {
				flex-grow: 1;
				margin-right: var(--common-indent-double);
				overflow: hidden;
			}
		}
	}

	.product-card__category {
		#common.text-small();
		color: var(--common-baseColor-hint);

		@media (max-width: @common-breakpoint-sm - 1px) {
			display: none;
		}
	}

	.product-card__title {
		a {
			&::before {
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				content: "";
			}
		}

		h3 {
			#common.text-small();
			font-weight: normal;
			font-family: var(--common-fontFamily-primary);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			@media (min-width: @common-breakpoint-sm) {
				#common.text-base();
			}
		}
	}

	.product-card__cost {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		.product-card--fill & {
			@media (min-width: @common-breakpoint-sm) {
				flex-direction: row-reverse;
			}
		}
	}

	.product-card__price {
		color: var(--common-accentColor-primary);
		font-family: var(--common-fontFamily-secondary);
		white-space: nowrap;

		@media (min-width: @common-breakpoint-sm) {
			#common.text-large();
		}

		.product-card--fill & {
			#common.text-large();

			@media (min-width: @common-breakpoint-sm) {
				#base.h3();
			}
		}
	}

	.product-card__old {
		color: var(--common-baseColor-hint);
		font-family: var(--common-fontFamily-secondary);
		position: relative;
		white-space: nowrap;

		&::before {
			content: "";
			left: -4px;
			right: 4px;
			top: 50%;
			height: 1px;
			background-color: var(--common-baseColor-hint);
			position: absolute;
			transform: rotate(15deg);
		}

		@media (max-width: @common-breakpoint-sm - 1px) {
			display: none;
		}

		.product-card--fill & {
			margin-right: var(--common-indent-base);
		}
	}

	.product-card__currency {
		#common.text-small();
	}
</style>
