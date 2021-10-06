class Endpoint {
    static instance = null;
    static getInstance() {
        if (Endpoint.instance == null) {
            Endpoint.instance = new Endpoint();
        }
        return Endpoint.instance;
    }


    LOGIN = "http://mhsmobile.amikom.ac.id/login"
    JADWAL = "http://mhsmobile.amikom.ac.id/api/personal/jadwal_kuliah"
    PERSONAL = "http://mhsmobile.amikom.ac.id/api/personal/init_data_mhs"
    LIST_PRESENSI = "http://mhsmobile.amikom.ac.id/api/presensi/list_mk"
    PRESENSI_QRCODE = "http://202.91.9.14:6000/api/presensi_mobile/validate_qr_code"
    PRESENSI_CODE = "http://202.91.9.14:6000/api/presensi_mobile/validate_ticket"
    KHS = "http://mhsmobile.amikom.ac.id/api/krs/init_khs"
    TRANSKRIP = "http://mhsmobile.amikom.ac.id/api/krs/transkrip"
}

module.exports = Endpoint.getInstance()