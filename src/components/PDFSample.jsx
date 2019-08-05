import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { api_cm_management } from '../config/appConfig'
import Test from '../assets/allan-wanderley.jpg'
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 15,
    },
    title: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    article: {
        marginTop: 15,
        fontSize: 10
    },
    section: {
        flexGrow: 1
    }
});

// Create Document Component
export function PDFSample(props){
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.title}>
                    <Text>{props.article.title}</Text>
                </View>
                <View style={styles.article}>
                    <Text>{props.article.textArticle}</Text>
                </View>
            </Page>
                {/* <View style={styles.section}>
                    <Text>Section #2</Text>
                </View> */}
        </Document>
    );
} 
