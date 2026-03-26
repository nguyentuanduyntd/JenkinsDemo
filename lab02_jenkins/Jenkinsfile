pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    stages{
        stage('Checkout') {
            steps {
                git 'https://github.com/nguyentuanduyntd/JenkinsDemo.git'                  
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'                  
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'                  
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
            }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
    }
}