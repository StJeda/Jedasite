pipeline {
    agent any
    
    triggers {
        pollSCM('* * * * *') 
    }
    
    stages {
        stage('Pull latest code') {
            steps {
                script {
                    sh 'git pull origin master'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t my-next-app .'
                }
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                script {
                    sh '''
                    docker stop next-container || true
                    docker rm next-container || true
                    '''
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    sh 'docker run -d --name next-container -p 3000:3000 my-next-app'
                }
            }
        }

        stage('Cleanup Old Containers') {
            steps {
                script {
                    sh '''
                    docker ps -a --format "{{.ID}}" | tail -n +8 | xargs --no-run-if-empty docker rm -f
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
