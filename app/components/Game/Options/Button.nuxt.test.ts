import { it, expect, describe } from 'vitest'
import Button from './Button.vue'

import { renderSuspended } from '@nuxt/test-utils/runtime'

describe('Button Component', () => {
	it('should render the button with float value', async () => {
		const wrapper = await renderSuspended(Button, {
			props: {
				value: 10.5,
			},
		})

		wrapper.getByText('10,50')
	})

	it('should render the button with integer value', async () => {
		const wrapper = await renderSuspended(Button, {
			props: {
				value: 11,
			},
		})

		wrapper.getByText('11')
	})
})
