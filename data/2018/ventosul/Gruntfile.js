module.exports = function(grunt){

  // Configuração do projeto
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    // WATCH
    watch:{
      styles:{
        files:[
          'dynamic/scss/*.scss',
          'dynamic/js/*.js'
        ],
        tasks:['compass','uglify']
      }
    },

    // SASS
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'dynamic/scss/',
          cssDir: 'static/css/',
          outputStyle:'compact',
          noLineComments:true
        }
      }
    },

    // UGLIFY
    uglify: {
      options: {
        mangle: false,
        beautify:true,
      },
      my_target: {
        files: {
          'static/js/main.js': ['dynamic/js/main.js']
        }
      }
    }

  });

  // Carrega os plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefas padrão
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['compass','uglify']);

};
