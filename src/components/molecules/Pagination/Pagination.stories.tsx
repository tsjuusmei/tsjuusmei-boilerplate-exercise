import React from 'react'

import Pagination from '.'
import type { Props } from '.'
import CardTestimonial from '@/components/molecules/CardTestimonial'

export default {
  title: 'Components / Molecules / Pagination',
  component: Pagination
}

export const Default = (args: Props) => <Pagination {...args} />
Default.args = {
  componentList: [
    <CardTestimonial quote="The best way to predict the future is to invent it." />,
    <CardTestimonial quote="If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?" />,
    <CardTestimonial quote="Everything has beauty, but not everyone can see." />,
    <CardTestimonial quote="Believe you can and you’re halfway there." />,
    <CardTestimonial quote="How wonderful it is that nobody need wait a single moment before starting to improve the world." />,
    <CardTestimonial quote="Imagination is everything. It is the preview of life’s coming attractions." />,
    <CardTestimonial quote="Change your thoughts and you change your world." />,
    <CardTestimonial quote="Happiness is not something ready made. It comes from your own actions." />,
    <CardTestimonial quote="Remember that happiness is a way of travel, not a destination." />,
    <CardTestimonial quote="Too many of us are not living our dreams because we are living our fears." />
  ]
}
