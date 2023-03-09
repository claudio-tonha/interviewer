import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import InterviewQuestions from './features/InterviewQuestions/InterviewQuestions';
import InterviewSettings from './features/InterviewSettings/InterviewSettings';
import InterviewCopy from './features/InterviewCopy/InterviewCopy';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store';
import { changeTab, eTab } from '../interview.slice';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function tabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const InterviewPanel = () => {

    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(changeTab(newValue as eTab));
    };

    const currentTab = useSelector((state: RootState) => state.interview.currentTab);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleChange}>
                    <Tab label="Settings" {...tabProps(0)} />
                    <Tab label="Questions" {...tabProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={currentTab} index={0}>
                <InterviewSettings />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <div style={{ display: 'flex', gap: '50px', flexDirection: 'column' }}>
                    <InterviewQuestions />
                    <InterviewCopy />
                </div>

            </TabPanel>
        </Box>
    )
}

export default InterviewPanel;