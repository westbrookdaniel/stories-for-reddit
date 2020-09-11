import React from 'react'
import { Skeleton } from '@chakra-ui/core'
import Card from './Card'
import { AnyObject } from '../../types'
import { motion } from 'framer-motion'

export const SkeletonCards = ({
	quanitity = 1,
	motionProps,
}: {
	quanitity?: Number
	motionProps: AnyObject
}) => {
	const cards: any[] = new Array(quanitity)

	if (motionProps) {
		for (let i = 0; i < cards.length; i++) {
			cards[i] = (
				<motion.div key={i} {...motionProps}>
					<Skeleton startColor="tan.600" endColor="tan.500">
						<Card />
					</Skeleton>
				</motion.div>
			)
		}
	} else {
		for (let i = 0; i < cards.length; i++) {
			cards[i] = (
				<Skeleton key={i} startColor="tan.600" endColor="tan.500">
					<Card />
				</Skeleton>
			)
		}
	}

	return cards
}
