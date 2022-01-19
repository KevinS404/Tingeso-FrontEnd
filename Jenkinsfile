pipeline {
    agent any
    stages {
        stage('SonarQube analysis'){
            steps {
                dir("/var/lib/jenkins/workspace/front/frontend"){
                    sh 'rm -rf .scannerwork'
                    sh 'npm install'
                    withSonarQubeEnv('sonarqube'){
                        sh 'npm run sonarqube'
                    }
                }
            }
        }
        stage('Test selenium'){
            steps{
                dir("/var/lib/jenkins/workspace/front/pruebas"){
                    sh 'chmod +x ./gradlew'
                    sh ' ./gradlew dependencies'
                    sh './gradlew test'
                }
            }
        }
        stage('Build-frontend'){
            steps{
                dir("/var/lib/jenkins/workspace/front/frontend") {
                    sh "docker build . -t front"
                }
            }
        }
        
    }
}