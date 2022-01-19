pipeline {
    agent any
    stages {
        stage('pull-repositorio'){
            steps{
                dir('repofront'){
                    try {
                        sh 'git pull'
                    }                    
                }
            }
        }
        /*stage('Test selenium'){
            steps{
                dir("/var/lib/jenkins/workspace/front/pruebas"){
                    sh 'chmod +x ./gradlew'
                    sh './gradlew dependencies'
                    sh './gradlew test'
                }
            }
        }
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
        }*/

        stage('Build-frontend'){
            steps{
                dir("/var/lib/jenkins/workspace/front/frontend") {
                    sh "docker build . -t front"
                    sh "docker tag front kevins404/imagen-front"
                    script{
                        docker.withRegistry('', 'docker'){
                        sh "docker push kevins404/imagen-front"
                        }
                    }
                }
            }
        }
        
    }
}