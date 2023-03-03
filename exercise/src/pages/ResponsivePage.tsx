import React from 'react';
import styled from 'styled-components';

import ContentCard from '../components/ContentCard';
import useWindowDimensions from '../hooks/window-hooks';

const Container = styled.div`
  display: flex;
	flex-direction: column;
`;

const DesktopBanner = styled.div<{ url: string; height: string; }>`
	background-image: ${(props) => `url(${props.url})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: ${(props) => props.height};
	width: 100%;
	align-items: center;
  justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	text-align: center;
	color: #FFFFFF;
	font-weight: bold;
	font-size: 80px;
	margin: 0;
`;

const Description = styled.p`
	text-align: center;
	font-size: 36px;
	color: #FFFFFF;
	margin: 0;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	gap: 40px;
	padding: 2rem 0;
`;

const ResponsivePage = () => {
	const { width } = useWindowDimensions();

	const contents = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue leo vel mauris scelerisque, in ullamcorper mauris tincidunt. Sed egestas leo turpis, eu tincidunt mi pellentesque quis. Maecenas interdum sit amet purus in fermentum. Ut rutrum.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu vehicula nunc, eu ultricies augue. Aenean venenatis gravida molestie. Maecenas.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam, dolor vitae vehicula mattis, lectus mauris egestas risus, egestas suscipit dui augue et nibh. Fusce quam nisi, euismod.'
	]

	return (
		<Container>
			<DesktopBanner
				url={width > 600 ? 'https://via.placeholder.com/1920x650' : 'https://via.placeholder.com/600x600' }
				height={width > 600 ? '650px' : '600px'}
			>
				<Title>Hello Developer!</Title>
				<Description>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</Description>
			</DesktopBanner>
			<ContentContainer>
				{contents.map((content, i) => {
					return <ContentCard key={i} content={content} />
				})}
			</ContentContainer>
		</Container>
	)
}

export default ResponsivePage;