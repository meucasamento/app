import React, { Component } from 'react'

import { 
    View
} from 'react-native'

import Report from '../../components/Report'
import WeedingBox from '../../components/WeddingBox'
import styles from './style'

const HomePage = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <WeedingBox/>
            </View>
            
            <View style={styles.footer}>
                <Report/>
            </View>
        </View>
    )

}

export default HomePage