import Link from "next/link"
import Container from "./container"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 公司信息 */}
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-3">
                Optima AI
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                極致智能科技有限公司
              </p>
              <p className="text-sm text-muted-foreground">
                AI 驱动的全栈技术服务
              </p>
            </div>

            {/* 导航链接 */}
            <div>
              <h3 className="text-sm font-semibold mb-3">导航</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    首页
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cases"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    案例
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h3 className="text-sm font-semibold mb-3">联系方式</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  邮箱：{" "}
                  <a
                    href="mailto:dev@optima.chat"
                    className="hover:text-foreground transition-colors"
                  >
                    dev@optima.chat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Optima AI Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
