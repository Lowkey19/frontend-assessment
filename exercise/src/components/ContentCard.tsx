import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 560px;
	width: 400px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 6px;
	padding: 20px;
`;

const ContentContainer = styled.div``;

const ContentBanner = styled.div`
	background-image: url(https://via.placeholder.com/400x300);
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 6px;
	height: 300px;
	width: 100%;
	align-items: center;
  justify-content: center;
	display: flex;
`;

const StyledContent = styled.p`
	text-align: center;
	font-size: 18px;
	margin: 12px 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledButton = styled.button`
	border-radius: 24px;
	border-width: 2px;
	width: 160px;
	height: 40px;
	font-weight: bold;
	font-size: 18px;

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

interface Props {
  content: string;
}

const ContentCard = (props: Props) => {
	const { content } = props;

	return (
		<CardContainer>
			<ContentContainer>
				<ContentBanner />
				<StyledContent>{content}</StyledContent>
			</ContentContainer>
			<ButtonContainer>
				<StyledButton>READ MORE</StyledButton>
			</ButtonContainer>
		</CardContainer>
	)
}

export default ContentCard;