import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { PersonalHeader } from '../components/personal-theme-header';
import {
	PublicationByHostDocument,
	PublicationByHostQuery,
	PublicationByHostQueryVariables,
} from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	publication: PublicationByHostQuery['publication'];
};

export default function Index({ publication }: Props) {
	if (!publication) return null;

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{publication.title} - About Me</title>
				</Head>
				<Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10 px-5 py-10">
					<PersonalHeader />

					{/* Hero Section */}
					<section className="flex flex-col items-center text-center">
						<div className="mb-8">
							<Image
								src={publication.author.profilePicture || ''}
								alt={publication.author.name || ''}
								className="h-40 w-40 rounded-full object-cover shadow-lg"
							/>
						</div>
						<h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
							{publication.author.name}
						</h1>
						<p className="text-xl text-slate-600 dark:text-slate-400">
							Software Developer & Educator & Artist
						</p>
					</section>

					{/* Bio Section */}
					<section className="prose dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
						<div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
							<p>
								Welcome to The Creative Developer! You can call me &ldquo;Ias&rdquo;. I&apos;m a
								passionate developer, educator, and artist who sees technology as a canvas for
								creativity and innovation.
							</p>
							<p>
								I thrive on solving complex problems, designing scalable systems, and empowering
								others to explore the exciting world of technology. With experience teaching
								countless aspiring developers, refactoring legacy systems into streamlined
								architectures, and embracing creativity in all aspects of my work, I&apos;ve built
								my career at the intersection of logic and imagination.
							</p>
							<p>
								Beyond code, I&apos;m a lifelong learner, an artist with a talent for creating
								lifelike pen drawings, and a teacher deeply committed to making technology
								accessible and inspiring to everyone.
							</p>
							<p>
								This blog is my space to share insights, lessons, and creative perspectives.
								Together, let&apos;s explore the boundless possibilities of technology and
								innovation! 🚀
							</p>
						</div>
					</section>
					{/* Artworks */}
					<section className="mt-12">
						<h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
							Artwork Gallery
						</h2>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
							{[
								{
									title: 'Drawing #1',
									image: '/assets/boy.jpg',
									description: 'Detailed pen drawing of a boy, exploring light and shadow',
								},
								{
									title: 'Drawing #2',
									image: '/assets/hand.jpg',
									description: 'Detailed pen drawing of a hand, exploring light and shadow',
								},
								// Add more artwork items as needed
							].map((artwork, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-lg bg-slate-100 shadow-md transition-transform hover:scale-[1.02] dark:bg-slate-800"
								>
									<div className="aspect-w-16 aspect-h-9">
										<Image
											src={artwork.image}
											alt={artwork.title}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="p-4">
										<h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
											{artwork.title}
										</h3>
										<p className="text-slate-600 dark:text-slate-400">{artwork.description}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Tech Stack */}
					<section className="mt-8">
						<h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
							{[
								'JavaScript',
								'TypeScript',
								'React',
								'Node.js',
								'Next.js',
								'GraphQL',
								'Java',
								'Python',
								'AWS',
							].map((tech) => (
								<div
									key={tech}
									className="rounded-lg bg-slate-100 p-4 text-center dark:bg-slate-800"
								>
									<span className="text-slate-800 dark:text-slate-200">{tech}</span>
								</div>
							))}
						</div>
					</section>

					{/* Social Links */}
					<section className="mt-12">
						<h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
							Let&apos;s Connect
						</h2>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
							<a
								href="https://x.com/ias_code"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<FaTwitter className="h-5 w-5" />
								<span>Twitter</span>
							</a>

							<a
								href="https://github.com/oliviasmim"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<FaGithub className="h-5 w-5" />
								<span>GitHub</span>
							</a>

							<a
								href="https://instagram.com/ias.code"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<FaInstagram className="h-5 w-5" />
								<span>Instagram</span>
							</a>

							<a
								href="https://www.linkedin.com/in/oliveiasmim/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<FaLinkedin className="h-5 w-5" />
								<span>LinkedIn</span>
							</a>

							<a
								href="https://app.daily.dev/iascode"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<span>Daily.dev</span>
							</a>

							<a
								href="mailto:iasmim@creativedev.art"
								className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
							>
								<FaEnvelope className="h-5 w-5" />
								<span>Email</span>
							</a>
						</div>
					</section>

					<Footer />
				</Container>
			</Layout>
		</AppProvider>
	);
}
export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PublicationByHostQuery, PublicationByHostQueryVariables>(
		GQL_ENDPOINT,
		PublicationByHostDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	if (!data.publication) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			publication: data.publication,
		},
		revalidate: 1,
	};
};
