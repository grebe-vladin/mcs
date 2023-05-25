import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import Users from '../../core/domains/users/entities/users.entity';
import { Active_Tokens } from '../../core/domains/users/entities/active_tokens.entity';
import Connectors from '../../core/domains/connectors/entities/connectors.entity';
import UserConnectors from '../../core/domains/user-connectors/entities/user-connectors.entity';
import UserBalances from '../../core/domains/balances/user-balances/entities/user-balances';
import UserBalancesHistory from '../../core/domains/balances/user-balances-history/entities/user-balances-history';
import Portfolios from '../../core/domains/portfolios/entities/portofolios.entity';
import PortfolioConnectors from '../../core/domains/portfolios-connectors/entities/portfolio-connectors.entity';
import AlphaUsers from '../../core/domains/alpha-users/entities/users-alpha.entity';
import CoinsHistoricalPrices from '../../core/domains/prices/coins/coins-historical-prices/entities/coins-historical-prices.entity';
import CoinsCurrencies from '../../core/domains/prices/coins/coins-currencies/entities/coins-currencies.entity';
import UserNft from '../../core/domains/user-nfts/entities/user-nft.entity';
import UserConnectorsNfts from '../../core/domains/user-connectors-nfts/entities/user-connectors-nft.entity';
import Newsletter from '../../core/domains/newsletters/entities/newsletter.entity';
import InternalErrorsMonitoring from '../../core/monitoring/internal-errors-monitoring/entities/internal-errors-monitoring.entity';
import ReferralCodes from '../../core/domains/users/entities/referral_codes.entity';
import { Config } from 'src/core/domains/config/entities/config.entity';
import { Subscriptions } from 'src/core/domains/subscriptions/entities/subscriptions.entity';
import { SubscriptionTemplates } from 'src/core/domains/subscriptions/entities/subscription-templates.entity';
import { Plugins } from 'src/core/domains/subscriptions/entities/plugins.entity';
import { MarketPlaces } from 'src/core/domains/market-places/entities/market-places.entity';
import { ConnectorTransactionUserConnector } from 'src/core/domains/connector-transaction-user-connector/entities/connector-transaction-user-connector.entity';
import { ConnectorTransactions } from 'src/core/domains/connector_transactions/entities/connector_transactions.entity';
import { Articles } from 'src/core/domains/articles/entities/articles.entity';
import { Tags } from 'src/core/domains/tags/entities/tags.entity';
import { OAuthProviders } from 'src/core/domains/oauth-providers/entities/oauth-providers.entity';
import { Device } from 'src/core/domains/notifications/entities/device.entity';
import { NftCollectionMarketData } from 'src/core/domains/nft-collections/entity/nft-collection-marketdata/nft-collection-marketdata.entity';
import { NftCollection } from 'src/core/domains/nft-collections/entity/nft-collection/nft-collection.entity';
import { CoinEvent } from 'src/core/domains/coin-event/entities/coin-event.entity';
import { CoinEventCoinCurrency } from 'src/core/domains/coin-event/entities/coin-event-coin-currency.entity';
import { NftEvent } from 'src/core/domains/nft-event/entities/nft-event.entity';
import { EventEmails } from 'src/core/domains/events/entities/event-emails.entity';
import { ClaimedRewards } from 'src/core/domains/rewards/entities/claimed-rewards.entity';
import { RewardsCodes } from 'src/core/domains/rewards/entities/rewards-codes.entity';
import { Rewards } from 'src/core/domains/rewards/entities/rewards.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: configService.get<number>('FORWARD_DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [
    Users,
    Active_Tokens,
    Connectors,
    UserConnectors,
    UserBalances,
    UserBalancesHistory,
    Portfolios,
    PortfolioConnectors,
    AlphaUsers,
    CoinsHistoricalPrices,
    CoinsCurrencies,
    UserNft,
    UserConnectorsNfts,
    Newsletter,
    InternalErrorsMonitoring,
    ReferralCodes,
    Subscriptions,
    SubscriptionTemplates,
    Plugins,
    Config,
    MarketPlaces,
    ConnectorTransactionUserConnector,
    ConnectorTransactions,
    Articles,
    Tags,
    OAuthProviders,
    Device,
    NftCollection,
    NftCollectionMarketData,
    CoinEvent,
    CoinEventCoinCurrency,
    NftEvent,
    Rewards,
    RewardsCodes,
    ClaimedRewards,
    EventEmails,
  ],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
});
