
// eslint-disable-next-line no-unused-vars
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineCharts = () => {

    const students = [
        { id: 1, name: 'Student 1', mathMark: 85, physicsMark: 75, chemistryMark: 90 },
        { id: 2, name: 'Student 2', mathMark: 78, physicsMark: 80, chemistryMark: 85 },
        { id: 3, name: 'Student 3', mathMark: 92, physicsMark: 88, chemistryMark: 95 },
        { id: 4, name: 'Student 4', mathMark: 65, physicsMark: 70, chemistryMark: 60 },
        { id: 5, name: 'Student 5', mathMark: 70, physicsMark: 65, chemistryMark: 75 },
        { id: 6, name: 'Student 6', mathMark: 88, physicsMark: 90, chemistryMark: 85 },
        { id: 7, name: 'Student 7', mathMark: 75, physicsMark: 78, chemistryMark: 80 },
        { id: 8, name: 'Student 8', mathMark: 82, physicsMark: 85, chemistryMark: 88 },
        { id: 9, name: 'Student 9', mathMark: 90, physicsMark: 92, chemistryMark: 95 },
        { id: 10, name: 'Student 10', mathMark: 79, physicsMark: 80, chemistryMark: 75 }
    ];



    return (
        <div>

            <LChart width={1200} height={400} data={students}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>

                <Line dataKey="mathMark" stroke='red'> </Line>
                <Line dataKey="physicsMark" stroke='yellow'> </Line>

            </LChart>

        </div>
    );
};

export default LineCharts;