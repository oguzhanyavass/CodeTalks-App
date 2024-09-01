export default function (errorCode: string): string {
  switch (errorCode) {
    case 'auth/claims-too-large':
      return 'Hak talebi yükü çok büyük';
    case 'auth/email-already-exists':
      return 'E-posta adresi zaten kullanımda';
    case 'auth/id-token-expired':
      return 'Kimlik jetonunun süresi dolmuş';
    case 'auth/id-token-revoked':
      return 'Kimlik jetonu iptal edilmiş';
    case 'auth/insufficient-permission':
      return 'Yetersiz izin';
    case 'auth/internal-error':
      return 'Beklenmeyen bir sunucu hatası';
    case 'auth/invalid-argument':
      return 'Geçersiz bağımsız değişken';
    case 'auth/invalid-claims':
      return 'Geçersiz hak talebi özellikleri';
    case 'auth/invalid-continue-uri':
      return "Geçersiz devam URL'si";
    case 'auth/invalid-creation-time':
      return 'Geçersiz oluşturma zamanı';
    case 'auth/invalid-credential':
      return 'Geçersiz kimlik bilgisi';
    case 'auth/invalid-disabled-field':
      return 'Geçersiz devre dışı bırakılmış alan';
    case 'auth/invalid-display-name':
      return 'Geçersiz görüntüleme adı';
    case 'auth/invalid-dynamic-link-domain':
      return 'Geçersiz dinamik bağlantı alanı';
    case 'auth/invalid-email':
      return 'Geçersiz E-Posta Adresi';
    case 'auth/invalid-email-verified':
      return 'Geçersiz e-posta doğrulama durumu';
    case 'auth/invalid-hash-algorithm':
      return 'Geçersiz karma algoritması';
    case 'auth/invalid-hash-block-size':
      return 'Geçersiz karma blok boyutu';
    case 'auth/invalid-hash-derived-key-length':
      return 'Geçersiz karma anahtar uzunluğu';
    case 'auth/invalid-hash-key':
      return 'Geçersiz karma anahtarı';
    case 'auth/invalid-hash-memory-cost':
      return 'Geçersiz karma bellek maliyeti';
    case 'auth/invalid-hash-parallelization':
      return 'Geçersiz karma paralelleştirme';
    case 'auth/invalid-hash-rounds':
      return 'Geçersiz karma yuvarlama sayısı';
    case 'auth/invalid-hash-salt-separator':
      return 'Geçersiz karma takviye ayırıcı';
    case 'auth/invalid-id-token':
      return 'Geçersiz kimlik jetonu';
    case 'auth/invalid-last-sign-in-time':
      return 'Geçersiz son oturum açma zamanı';
    case 'auth/invalid-page-token':
      return 'Geçersiz sayfa jetonu';
    case 'auth/invalid-password':
      return 'Geçersiz şifre';
    case 'auth/invalid-password-hash':
      return 'Geçersiz şifre karması';
    case 'auth/invalid-password-salt':
      return 'Geçersiz şifre takviyesi';
    case 'auth/invalid-phone-number':
      return 'Geçersiz telefon numarası';
    case 'auth/invalid-photo-url':
      return "Geçersiz fotoğraf URL'si";
    case 'auth/invalid-provider-data':
      return 'Geçersiz sağlayıcı verisi';
    case 'auth/invalid-provider-id':
      return 'Geçersiz sağlayıcı kimliği';
    case 'auth/invalid-oauth-responsetype':
      return 'Geçersiz OAuth yanıt tipi';
    case 'auth/invalid-session-cookie-duration':
      return 'Geçersiz oturum çerezi süresi';
    case 'auth/invalid-uid':
      return 'Geçersiz kullanıcı kimliği (UID)';
    case 'auth/invalid-user-import':
      return 'Geçersiz kullanıcı kaydı';
    case 'auth/maximum-user-count-exceeded':
      return 'Maksimum kullanıcı sayısı aşıldı';
    case 'auth/missing-android-pkg-name':
      return 'Eksik Android paket adı';
    case 'auth/missing-continue-uri':
      return "Eksik devam URL'si";
    case 'auth/missing-hash-algorithm':
      return 'Eksik karma algoritması';
    case 'auth/missing-ios-bundle-id':
      return 'Eksik iOS paket kimliği';
    case 'auth/missing-uid':
      return 'Eksik kullanıcı kimliği (UID)';
    case 'auth/missing-oauth-client-secret':
      return 'Eksik OAuth istemci gizli anahtarı';
    case 'auth/operation-not-allowed':
      return 'İşlem izni yok';
    case 'auth/phone-number-already-exists':
      return 'Telefon numarası zaten kullanımda';
    case 'auth/project-not-found':
      return 'Proje bulunamadı';
    case 'auth/reserved-claims':
      return 'Ayrılmış hak talebi';
    case 'auth/session-cookie-expired':
      return 'Oturum çerezi süresi doldu';
    case 'auth/session-cookie-revoked':
      return 'Oturum çerezi iptal edildi';
    case 'auth/too-many-requests':
      return 'Çok fazla istek';
    case 'auth/uid-already-exists':
      return 'Kullanıcı kimliği (UID) zaten kullanımda';
    case 'auth/unauthorized-continue-uri':
      return "Yetkisiz devam URL'si";
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/weak-password':
      return 'Zayıf Parola';
    default:
      return 'Bilinmeyen bir hata oluştu';
  }
}
