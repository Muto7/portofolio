export const Proyek = () => {
  return (
    <section
      id="Proyek"
      className="bg-custom-secondary pt-auto sm:w-full md:max-w-full max-h-full pt-28"
    >
      <div className="container mx-auto px-4 w-full font-poppins">
        <div className="lg:text-4xl sm:font-semibold  font-semibold text-center underline underline-offset-8 decoration-custom-thrid">
          Proyek
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/muto-koding.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">
              Website Pembelajaran
            </h1>
            <p className="text-sm text-gray-600">
              Website ini saya buat dengan harapan banyak yang bisa belajar
              ngoding dengan cerita sedikit pengalaman saya terhadap perjalanan
              dalam dunia Teknik Informatika, website ini dibuat dengan
              framework React.js dan Node.js dan dijalankan dengan penerapan
              Continuous Integration/Continuous Deployment CI/CD
            </p>
          </div>
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/dicoding-hapi.js.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">Hapi.js Server-side</h1>
            <p className="text-sm text-gray-600">
              pernah mengikuti class dicoding untuk belajar framework{" "}
              <bold>Node.js</bold> dengan library hapi.js membuat sebuah
              server-side agar bisa berjalan sesuai ketentuan dengan melakukan
              testing didalam postman yang testingnya sediri dalam
              pembelajarannya diajarkan untuk menjadi lebih baik dan teratur.
            </p>
          </div>
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/sigeotangan.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">Project TEAM</h1>
            <p className="text-sm text-gray-600">
              Memebangun sebuah aplikasi untuk lokasi krisis pangan bersama TEAM
              Kostan untuk membantu clint dalam membantu para korban bencana
              alam atau warga yang terkena krisis pangan dengan menerapkan
              metode based location. apliaksi ini berjalan di android dan untuk
              admin berjalan di website. saya dan beberapa teman Kostan saya
              mengerjakan admin dengan framework laravel 10.
            </p>
          </div>
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/moodle-chairos.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">Tugas Akhir</h1>
            <p className="text-sm text-gray-600">
              Saya pernah mengikuti Studi Independen di Chairos Achademy untuk
              mengikuti sebuah pembelajaran Cloud Computing. Dalam Perjalanannya
              saya diajakarkan bagaimana cara kerja dari Amazon Web Service(
              {"AWS"}) dari setiap Service yang mana bertujuan dalam membangun
              Infrastruktur yang Efisien dan Efektif agar biaya bisa di
              kalkulasinya dalam range lebih rendah.
            </p>
          </div>
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/ec2-chairos.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">Cloud Computing</h1>
            <p className="text-sm text-gray-600">
              Ini adalah Tugas Akhir saya di Chairos Achademy saya mengambil
              moodle sebagai tugas akhir yang mana saya harus bisa jalankan
              moodle ini didalam server AWS dengan Infrastruktur dan biaya yang
              rendah yaitu tidak melebihi Tiga Ratus Ribu Rupiah .
            </p>
          </div>
          <div className="p-4 m-8 max-w-full bg-white shadow-md rounded-xl hover:scale-125 duration-300">
            <picture className="rounded-lg block">
              <img src="../../src/assets/proyek/dinesti.png" />
            </picture>
            <h1 className="mt-4 mb-2 text-xl font-bold">Membuat Akses</h1>
            <p className="text-sm text-gray-600">
              Membantu Menjalankan Website dari sebuah sekolah Musik agar bisa
              diakses Internet dari sisi Server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
