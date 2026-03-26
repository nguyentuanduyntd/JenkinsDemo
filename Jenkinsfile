pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }                                    // ← đóng agent

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/nguyentuanduyntd/JenkinsDemo.git'
            }
        }

        stage('Install') {
            steps {
                dir('lab02_jenkins') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('lab02_jenkins') {
                    sh 'node --test'
                }
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