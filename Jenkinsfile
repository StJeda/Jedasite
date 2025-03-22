post {
    success {
        script {
            def userCause = currentBuild.getBuildCauses().find { it.class.name == 'hudson.model.Cause$UserIdCause' }
            def user = userCause?.userId ?: 'Unknown'

            discordSend(
                webhookURL: "https://discord.com/api/webhooks/1352787577736007732/CcbzMW6zj7wa8HRjfQxJuKrMFFmzlLIolgokxt92I5cCm8vKLfIk6WoiO6t3osBAsdlz",
                description: "✅ Deployment successful!\n**Build:** #${BUILD_NUMBER}\n**Triggered by:** ${user}",
                footer: 'Jenkins CI/CD',
                link: env.BUILD_URL,
                result: currentBuild.currentResult,
                title: JOB_NAME
            )
        }
    }

    failure {
        script {
            def userCause = currentBuild.getBuildCauses().find { it.class.name == 'hudson.model.Cause$UserIdCause' }
            def user = userCause?.userId ?: 'Unknown'

            discordSend(
                webhookURL: "https://discord.com/api/webhooks/1352787577736007732/CcbzMW6zj7wa8HRjfQxJuKrMFFmzlLIolgokxt92I5cCm8vKLfIk6WoiO6t3osBAsdlz",
                description: "❌ Deployment failed!\n**Build:** #${BUILD_NUMBER}\n**Triggered by:** ${user}",
                footer: 'Jenkins CI/CD',
                link: env.BUILD_URL,
                result: currentBuild.currentResult,
                title: JOB_NAME
            )
        }
    }
}
