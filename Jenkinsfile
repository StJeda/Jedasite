pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
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
                    sh 'docker system prune -f'
                }
            }
        }
    }

    post {
        success {
            script {
                def author = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
                def commitTime = sh(script: "git log -1 --pretty=format:'%cd'", returnStdout: true).trim()
    
                discordSend(
                    webhookURL: "https://discord.com/api/webhooks/1352787577736007732/CcbzMW6zj7wa8HRjfQxJuKrMFFmzlLIolgokxt92I5cCm8vKLfIk6WoiO6t3osBAsdlz",
                    description: "✅ Deployment successful!\n**Build:** #${BUILD_NUMBER}\n**\n**Commit by:** ${author}\n**Committed at:** ${commitTime}",
                    footer: 'Jenkins CI/CD',
                    link: env.BUILD_URL,
                    result: currentBuild.currentResult,
                    title: JOB_NAME
                )
            }
        }
    
        failure {
            script {
                def author = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
                def commitTime = sh(script: "git log -1 --pretty=format:'%cd'", returnStdout: true).trim()
    
                discordSend(
                    webhookURL: "https://discord.com/api/webhooks/1352787577736007732/CcbzMW6zj7wa8HRjfQxJuKrMFFmzlLIolgokxt92I5cCm8vKLfIk6WoiO6t3osBAsdlz",
                    description: "❌ Deployment failed!\n**Build:** #${BUILD_NUMBER}\n**\n**Commit by:** ${author}\n**Committed at:** ${commitTime}",
                    footer: 'Jenkins CI/CD',
                    link: env.BUILD_URL,
                    result: currentBuild.currentResult,
                    title: JOB_NAME
                )
            }
        }
    }
}
