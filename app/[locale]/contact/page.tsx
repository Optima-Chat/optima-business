import { getTranslations } from 'next-intl/server'
import Container from "@/components/layout/container"
import ContactForm from "@/components/features/contact-form"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'contact' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}
