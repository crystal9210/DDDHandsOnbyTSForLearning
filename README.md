TypeScript を使用してドメイン駆動設計（DDD）の原則に基づいた API の構築を学ぶためのガイドのハンズオンリポジトリ

【要点】
・ビジネスの要求からそれをドメインモデルとして設計する
・ドメイン駆動設計(DDD)をコードとして実装に落とし込む
・ドメインモデルを適切にコードに落とし込む
・集約、エンティティ、値オブジェクト、リポジトリなどのドメイン駆動設計のキーコンセプトを実践しながら理解

【基本概念の確認】
・ドメイン：ソフトウェアが解決仕様としている特定の問題領域；それぞれの業界や組織に固有のもの
・問題領域：業務内の具体的な問題・ニーズ
・ドメインモデリング：特定の問題領域を理解し、それらの性質や関係をモデルや図に落とし込むことでより分析しやすくし、ソフトウェア本体の設計や実装に反映させる作業(要求定義を図解で行うイメージ)
・ドメインエキスパート：特定のドメインや業務領域において深い知識・経験を持つ専門家
→ 実際の業務ニーズに合致したより正確で効果的なドメインモデルの構築が可能となり、ソフトウェアの開発の質・効率の向上につながる
・境界付けられたコンテキスト：特定のドメインが適用される明確な境界を示すもの
・ビジネスルール：ビジネスの運営に必要なルールや手続きを表現する明確な規則や条件のこと
・イベントストーミング(Event Storming)：複雑なビジネスプロセスやドメインの知識を共有、可視化、そして理解するための共同作業ベースンモデリング
手法
→ ホワイトボードや Miro などのオンラインコラボレーションツールを持ち千絵直感的かつインタラクティブな方法でドメインの知識を共有し、問題点やビジネスルールを特定することを目的としている
先に技術を選定して要件を構築するとドメイン解決のためのビジネス要件との衝突が生じ、それを解消できないことがある
→ ビジネス・ドメインの知識や要求を元に要件を決めたりすることで適切にビジネスとして問題解決を行うソフトウェアサービスを構築できる
・戦術的設計：コードの複雑性をコードにどのように反映させるか、具体的なアプローチやパターンに焦点を当てたもの
・アーキテクチャ：ソフトウェアアプリケーションを構築する際の設計思想＋構造計画；ドメイン駆動計画のアプローチやパターンをどのように実装するか決めるもの
・DDD におけるリポジトリ：集約を DB に保存させるようにする、保存した集約を DB から取得できるようにするためのオブジェクト
→ 参照：https://zenn.dev/taiyou/articles/047b4065e34231
・集約：関連するオブジェクトのクラスタ；集約は一連のビジネスルールに従って、データの整合性を保持する
・集約ルート：各集約にある主要なエンティティ → 集約内の他のオブジェクトに対するアクセスポイントとして機能
・DIP(dependency inversion principle;依存性逆転の原則)：
① 上位モジュールは下位モジュールに依存してはならない、両方とも抽象に依存するように設計する
② 抽象は詳細に依存せず、詳細が抽象に依存するように設計する(詳細=具体)
☆DIP はいい設計をするための原則についての言及
・DI(dependency injection;依存性の注入):あるオブジェクトが必要とする関数や構造体など依存オブジェクト(サービス、ツール、クライアントなど)を外部から提供(注入)すること；つまり、コンポーネントごとに責任の分離を綺麗にすることで開発の途中などに仕様変更があったとき、変更の箇所をより少なく済むようにすること

☆ 良いアーキテクチャとは：要件の変更や新しい技術の採用に柔軟に対応し、システムパフォーマンス、スケーラビリティ、セキュリティを最適化する手助けとなる

【参照】
https://zenn.dev/yamachan0625/books/ddd-hands-on/viewer/chapter1_intro
