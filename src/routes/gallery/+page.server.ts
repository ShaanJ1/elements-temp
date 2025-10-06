import { readdir } from 'fs/promises';
import { join } from 'path';
import type { GalleryImage } from '$lib/types';

const imageMetadata: Record<string, { alt: string; category: string }> = {
	'cabinets.jpg': {
		alt: 'Kitchen #1',
		category: 'kitchen'
	},
	'flooring.jpg': {
		alt: 'Cabinet #1',
		category: 'cabinets'
	},
	'modern-kitchen.jpg': {
		alt: 'Kitchen #2',
		category: 'kitchen'
	},
	'1.jpg': {
		alt: 'Cabinet #2',
		category: 'cabinets'
	},
	'2.jpg': {
		alt: 'Kitchen #3',
		category: 'kitchen'
	},
	'3.jpg': {
		alt: 'Cabinet #3',
		category: 'cabinets'
	},
	'4.jpg': {
		alt: 'Kitchen #4',
		category: 'kitchen'
	},
	'5.jpg': {
		alt: 'Custom #1',
		category: 'custom'
	},
	'6.jpg': {
		alt: 'Custom #2',
		category: 'custom'
	},
	'7.jpg': {
		alt: 'Custom #3',
		category: 'custom'
	},
	'8.jpg': {
		alt: 'Custom #4',
		category: 'custom'
	},
	'9.jpg': {
		alt: 'Custom #5',
		category: 'custom'
	},
	'10.jpg': {
		alt: 'Custom #6',
		category: 'custom'
	},
	'11.jpg': {
		alt: 'Custom #7',
		category: 'custom'
	},
	'12.jpg': {
		alt: 'Custom #8',
		category: 'custom'
	},
	'13.jpg': {
		alt: 'Kitchen #5',
		category: 'kitchen'
	},
	'14.jpg': {
		alt: 'Custom #9',
		category: 'custom'
	},
	'15.jpg': {
		alt: 'Kitchen #6',
		category: 'kitchen'
	},
	'16.jpg': {
		alt: 'Kitchen #7',
		category: 'kitchen'
	},
    '17.jpg': {
		alt: 'Kitchen #8',
		category: 'kitchen'
	}
};

export async function load() {
	const images: GalleryImage[] = [];
	
	try {
		// Load images from showcase directory
		const showcasePath = join(process.cwd(), 'static', 'images', 'images', 'showcase');
		const showcaseFiles = await readdir(showcasePath);
		
		showcaseFiles
			.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
			.forEach(filename => {
				const metadata = imageMetadata[filename] || {
					title: filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '),
					description: '',
					category: 'all'
				};
				
				images.push({
					src: `/images/images/showcase/${filename}`,
					alt: metadata.alt,
					category: metadata.category
				});
			});

		// Load images from featured directory
		const featuredPath = join(process.cwd(), 'static', 'images', 'images', 'featured');
		const featuredFiles = await readdir(featuredPath);
		
		featuredFiles
			.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
			.forEach(filename => {
				// Avoid duplicates from showcase
				if (!showcaseFiles.includes(filename)) {
					const metadata = imageMetadata[filename] || {
						title: filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '),
						description: 'Featured millwork and flooring project',
						category: 'custom'
					};
					
					images.push({
						src: `/images/images/featured/${filename}`,
						alt: metadata.alt,
						category: metadata.category
					});
				}
			});

	} catch (error) {
		console.error('Error loading gallery images:', error);
		// Fallback to static images if file reading fails
		return {
			images: [{
				src: '/images/images/showcase/modern-kitchen.jpg',
				alt: 'Modern Kitchen',
				title: 'Modern Kitchen Design',
				description: 'Our featured kitchen renovation project',
				category: 'kitchens'
			}]
		};
	}

	return {
		images: images.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
	};
}