module.exports = function(grunt){

  // Configuração do projeto
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    // Watch
    watch:{
      styles:{
        files:[
          'scss/*.scss'
        ],
        tasks:['sass','autoprefixer']
      }
    },

    // SASS
    sass:{
      dist:{
        files:[{
          expand:true,
          cwd:'scss',
          src:['**/*.scss'],
          dest:'static/css/',
          ext:'.css'
        }],
        options:{
          sourcemap:'none',
          style:'compact'
        }
      }
    },

    autoprefixer:{
      options:{
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist:{
        files:{
          'static/css/main.css':'static/css/main.css'
        }
      }
    }

  });

  // Carrega os plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Tarefas padrão
  grunt.registerTask('default', ['watch']);

};
