import styles from './WorkFrame.module.scss';
import Splitter from "m-react-splitters";



function WorkFrame(props) {
    return (
        <div className={styles.workFrame}>
            <Splitter
                position="vertical"
                primaryPaneWidth="240px"
                primaryPaneMaxWidth="100%"
                primaryPaneMinWidth={0}
                dispatchResize={true}
                postPoned={false}
            >
                {/* LEFT WORK-AREA */}
                <Splitter
                    position="horizontal"
                    primaryPaneHeight={340}
                    primaryPaneMaxHeight="100%"
                    primaryPaneMinHeight={0}
                >
                    <div
                        className={styles.frame}
                        style={{backgroundColor: '#add7f6'}}
                    >
                        {props.firstFrame}
                    </div>
                    <div
                        className={styles.frame}
                        style={{backgroundColor: '#3f8efc'}}
                    >
                        {props.thirdFrame}
                    </div>
                </Splitter>

                {/* RIGHT WORK-AREA */}
                <Splitter
                    position="horizontal"
                    primaryPaneHeight={450}
                    primaryPaneMaxHeight="100%"
                    primaryPaneMinHeight={0}
                >
                    <div
                        className={styles.frame}
                        style={{backgroundColor: '#87bfff'}}
                    >
                        {props.secondFrame}
                    </div>
                    <div
                        className={styles.frame}
                        style={{backgroundColor: '#2667ff'}}
                    >
                        {props.fourthFrame}
                    </div>
                </Splitter>
            </Splitter>
        </div>
    )
}

export default WorkFrame;