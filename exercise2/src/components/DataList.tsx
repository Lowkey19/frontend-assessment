import { Collapse, Grid, Tabs, TabsProps } from 'antd';
import Parser from 'html-react-parser';
import React from 'react';
import styled from 'styled-components';

import DataArray from './data.json';

const { useBreakpoint } = Grid;
const { Panel } = Collapse;

const DesktopView = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileView = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
	padding: 3rem;
`

const DataList = () => {
	const screens = useBreakpoint();
	const items: TabsProps['items'] = DataArray.map((data, i) => {
		return {
			key: `data-${i}`,
			label: data.title,
			children: Parser(data.content),
		}
	});

	if (screens.xs || (screens.sm && !screens.md)) {
		return (
			<MobileView>
				<Container>
					<Collapse accordion defaultActiveKey={'data-0'}>
						{DataArray.map((data, i) => {
							return (
								<Panel key={`data-${i}`} header={data.title}>
									{Parser(data.content)}
								</Panel>
							)
						})}
					</Collapse>
				</Container>
			</MobileView>
		)
	}
	
	return (
		<DesktopView>
			<Container>
				<Tabs defaultActiveKey={'data-0'} items={items}/>
			</Container>
		</DesktopView>
	);
}

export default DataList;